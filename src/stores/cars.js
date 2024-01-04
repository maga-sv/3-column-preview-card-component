import { defineStore } from "pinia";
import SedansIcon from "@/assets/images/icon-sedans.svg"
import SUVsIcon from "@/assets/images/icon-suvs.svg"
import LuxuryIcon from "@/assets/images/icon-luxury.svg"

export const useCarStore = defineStore("cars", {
    state: () => ({
        cars: [
            {
                styleNum: "first",
                src: SedansIcon,
                type: "Sedans",
                advice: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            },
            {
                styleNum: "second",
                src: SUVsIcon,
                type: "SUVs",
                advice: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            },
            {
                styleNum: "third",
                src: LuxuryIcon,
                type: "Luxury",
                advice: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            },
        ]
    })
})