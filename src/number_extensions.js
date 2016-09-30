Number.prototype.$round = function(fractionalDigits) {
    return parseFloat(this.toFixed(fractionalDigits));
};
