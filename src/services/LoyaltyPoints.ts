export class LoyaltyPoints {
    constructor(
        public points: number
    ) {
        this.points = this.getPoints();
    }

    getPoints() {
        let points = localStorage.getItem("loyaltyPoints");
        if (!points) {
            localStorage.setItem("loyaltyPoints", "0");
            return 0;
        }
        return parseInt(points, 10);
    }

    setPoints() {
        localStorage.setItem("loyaltyPoints", this.points.toLocaleString());
    }

    addPoints(val: number) {
        this.points += val;
        this.setPoints();
        this.sendMessage(`Congratz! You just got ${val} points. You now have ${this.points} loyalty points!`)
    }

    removePoints(val: number) {
        if (val > this.points) {
            this.sendMessage("You don't have enough loyalty points for this transaction!")
        } else {
            this.points -= val;
            this.setPoints();
            this.sendMessage(`Congratz! You just spent ${val} points. You now have ${this.points} loyalty points!`)
        }
    }

    sendMessage(message: string) {
        alert(message);
    }
}