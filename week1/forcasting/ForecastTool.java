package forcasting;
import java.util.Scanner;

public class ForecastTool {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double rate, int years) {
        if(years==0){
            return currentValue;
        }
        return futureValue(currentValue*(1 + rate),rate,years-1);
    }

    public static void main(String[] args) {
    	Scanner sc=new Scanner(System.in);
    	System.out.println("Enter the current population:");
        double initialValue=sc.nextDouble();  
        System.out.println("Enter the growth rate:");
        double growthRate=sc.nextDouble();  
        System.out.println("Enter the year to predict the population:");
        int years =sc.nextInt();
        double future=futureValue(initialValue,growthRate,years);
        System.out.printf("Future value after %d years: ₹%.2f\n",years,future);
    }
}

