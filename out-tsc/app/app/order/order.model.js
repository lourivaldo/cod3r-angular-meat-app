var Order = /** @class */ (function () {
    function Order(address, number, optionalAddress, paymentOption, orderItems, id) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
export { Order, OrderItem };
//# sourceMappingURL=order.model.js.map