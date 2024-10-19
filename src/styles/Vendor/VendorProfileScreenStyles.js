import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

const normalize = (size) => Math.round(scale * size);

const styles = StyleSheet.create({
  vendorProfile: {
    backgroundColor: "#f8f8f8",
    flex: 1,
  },
  vendorHeader: {
    backgroundColor: "#4fbb56",
    paddingVertical: 20,
    alignItems: "center",
  },
  vendorName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  contactEmail: {
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  phoneNumber: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  frameScrollViewContent: {
    paddingBottom: 50,
  },
  membershipSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  membershipStatus: {
    fontSize: 18,
    color: "#228b22",
    marginBottom: 10,
  },
  membershipExpiry: {
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },
  manageMembershipButton: {
    backgroundColor: "#228b22",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  manageMembershipText: {
    color: "#fff",
    fontSize: 16,
  },
  statsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 16,
    color: "#000",
  },
  statValue: {
    fontSize: 16,
    color: "#000",
  },
  settingsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  settingsOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#000",
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  navText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  icon: {
    height: "100%",
    width: "100%"
  },
});

export default styles;
