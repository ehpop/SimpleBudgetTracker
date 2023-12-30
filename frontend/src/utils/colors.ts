interface IColorsType {
    [key: string]: {
        backgroundColor: string,
        borderColor: string,
        hoverBackgroundColor: string,
        hoverBorderColor: string
    }
}

export const CHART_COLORS: IColorsType = {
    income: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: 'rgba(0, 255, 0, 1)',
        hoverBackgroundColor: 'rgba(0, 255, 0, 0.8)',
        hoverBorderColor: 'rgba(0, 255, 0, 1)'
    },
    expense: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: 'rgba(255, 0, 0, 1)',
        hoverBackgroundColor: 'rgba(255, 0, 0, 0.8)',
        hoverBorderColor: 'rgba(255, 0, 0, 1)'
    }
}