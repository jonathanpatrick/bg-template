export interface Player {

    //Resource counts
    resources: {
        clay: number;
        lumber: number;
        ore: number;
        wheat: number;
        wool: number;
    }

    developmentCardCount: number;

    victoryPointCount: number;
    settlementCount: number;
    cityCount: number;
    roadCounter: number;
    //add development card array

}