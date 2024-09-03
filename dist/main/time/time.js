import { RealKSPTime } from "./realtime.js";
import { BaseKSPTime } from "./basetime.js";
import { KronometerTime } from "./kronometertime.js";
export function KSPTime(date, config, dateMode) {
    switch (config.type) {
        case "base":
            if (config.daysPerYear === undefined || config.hoursPerDay === undefined)
                throw new Error("Missing daysPerYear or hoursPerDay in time config");
            return new BaseKSPTime(date, config, dateMode);
        case "real":
            return new RealKSPTime(date, config);
        case "kronometer":
            if (config.orbitalPeriod === undefined || config.solarDayLength === undefined)
                throw new Error("Missing orbitalPeriod or solarDayLength in time config");
            return new KronometerTime(date, config);
    }
}
