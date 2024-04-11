export const countCouponPrice = (matches: any[]) => {
    return matches.reduce((totalPrice, match) => {
        if (totalPrice === 0) {
            return totalPrice + match.matchRate;
        }
        return totalPrice * match.matchRate;
    }, 0);
};
