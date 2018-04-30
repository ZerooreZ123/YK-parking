const API = {
  getVehicleList: '/yk/api/vehicle/getVehicleList', // 获取绑定车辆
  deleteVehicle: '/yk/api/vehicle/deleteVehicle', // 解绑车辆
  addVehicle: '/yk/api/vehicle/addVehicle', // 新增车辆
  getTemporaryOrderList: '/yk/api/temporaryOrder/getTemporaryOrderList', // 获取临停订单列表
  getReplaceOrderList: '/yk/api/replaceOrder/getReplaceOrderList', // 获取代缴订单列表
  getNotificationList: '/yk/api/notification/getNotificationList', // 获取通知列表
  getMonthlyPlansOrderList: '/yk/api/monthlyPlansOrder/getMonthlyPlansOrderList', // 获取包月订单列表
  getParkingLotList: '/yk/api/getParkingLotList', // 获取停车场列表
  getCarCardInfo: '/yk/api/getCarCardInfo', // 固定车查询
  getCarCardFee: '/yk/api/getCarCardFee', // 固定车充值订单查询
  payCarCardFee: '/yk/api/payCarCardFee' // 固定车充值
}
export default API
