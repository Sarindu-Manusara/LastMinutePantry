import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import RNFS from 'react-native-fs'; 
import Share from 'react-native-share'; 
import {Buffer} from 'buffer'; 
import backArrow from '../../../assets/images/customer/backArrow.png';
import {useNavigation} from '@react-navigation/native';
import CustomerAdminHeader from '../../CustomerAdminHeader';
import styles from '../../../styles/Customer/admin/ReportScreenStyles';
import calender from '../../../assets/images/customer/calendar.png';

export default function ReportScreen({navigation}) {
  const goback = useNavigation();
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const baseUrl = 'http://192.168.130.190:5000';
  const [reports, setReports] = useState([]);
  const handleStartDateChange = (event, selectedDate) => {
    setShowStartPicker(false);
    if (selectedDate) setStartDate(selectedDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndPicker(false);
    if (selectedDate) setEndDate(selectedDate);
  };

  const handleGenerateReport = async () => {
    const response = await axios.get(`${baseUrl}/api/orders/report`, {
      params: {
        startDate: StartDate.toISOString(),
        endDate: EndDate.toISOString(),
      },
      responseType: 'arraybuffer',
    });

    const base64 = Buffer.from(response.data, 'binary').toString('base64');
    const path = `${RNFS.DocumentDirectoryPath}/report.pdf`;
    await RNFS.writeFile(path, base64, 'base64');
    await Share.open({url: `file://${path}`, title: 'Download Report'});
  };

  const fetchOrdersReport = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/orders/report/all`);
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrdersReport();
    }, []),
  );

  return (

    <ScrollView>
    <View style={styles.container}>
      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <CustomerAdminHeader name="Generate Reports" />

      <View style={styles.wrapper}>
        <View style={styles.datePickerWrapper}>
          <TouchableOpacity
            onPress={() => setShowStartPicker(true)}
            style={styles.dateButton}>
            <Text>Start Date</Text>
            <Image source={calender} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          {showStartPicker && (
            <DateTimePicker
              value={StartDate}
              mode="date"
              display="default"
              onChange={handleStartDateChange}
            />
          )}

          <Text style={styles.to}> To</Text>

          <TouchableOpacity
            onPress={() => setShowEndPicker(true)}
            style={styles.dateButton}>
            <Text>End Date</Text>
            <Image source={calender} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          {showEndPicker && (
            <DateTimePicker
              value={EndDate}
              mode="date"
              display="default"
              onChange={handleEndDateChange}
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.generateButton}
          onPress={handleGenerateReport}>
          <Text style={styles.generateButtonText}>Generate Report</Text>
        </TouchableOpacity>

        <View style={styles.reportsWrapper}>
          {reports?.map((report, i) => (
            <TouchableOpacity style={styles.reportBtn} key={i}  onPress={handleGenerateReport}>
              <Text style={styles.viewRepoTxt}>
                Report {i + 1} -{' '}
                {new Date(report.StartDate).toLocaleDateString()} to{' '}
                {new Date(report.EndDate).toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
