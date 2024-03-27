import {Dimensions, Text, View,StyleSheet} from "react-native";
import {PieChart} from "react-native-chart-kit";
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

const pieChartData = [
    { name: 'Ja-Ela', population: 85, color: '#CDBDFA', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Negambo', population: 21, color: '#4B3886', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Katana', population: 10, color: 'rgba(99, 81, 159, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
]
const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(54, 33, 141, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: 0,
    useShadowColorFromDataset: false // optional
};
const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style
}
export function PreschoolGraduatesCounts(){
    const navigation = useNavigation();

    const width = Dimensions.get('window').width
    const height = 220

    return (
        <>
            <View style={styles.chartHeader}>
                <Text style={styles.headerTxt}>Preschool Graduates counts</Text>
                <Button
                    mode="outlined"
                    onPress={() => {
                        navigation.navigate('PreSchoolCases');
                    }}
                >
                    Load more
                </Button>
            </View>
            <View class={"pt-20"}>
                <PieChart
                    data={pieChartData}
                    width={width}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    // paddingLeft={"15"}
                    center={[5, 0]}
                    absolute
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    chartHeader: {
        marginTop:8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
    },
    headerTxt:{
        fontSize:16,
        fontWeight:"bold"
    }
});