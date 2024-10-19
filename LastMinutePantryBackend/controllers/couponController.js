const coupons = [
  {
    code: '50OFF',
    discount: 50,
  },
  {
    code: '25OFF',
    discount: 25,
  },
  {
    code: '10OFF',
    discount: 10,
  },
]

exports.checkcoupon = async (req, res) => {

  const couponCode = req.query.code;
  const coupon = coupons.find(c => c.code === couponCode);

  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }

  res.status(200).json(coupon);
}
