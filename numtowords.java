import java.util.*;
class numtowords{

    static String[] nums = {
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen"
    };

    static String[] large = {
        "",
        " thousand",
        " million",
        " billion",
        " trillion",
        " quadrillion",
        " quintillion"
    };

    static String[] tens = {
        "",
        " ten",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety"
    };

    public static String thousand(int n) {
        String words;
        
        if (n % 100 < 20){
            words = nums[n % 100];
            n /= 100;
        }
        else {
            words = nums[n % 10];
            n /= 10;
            
            words = tens[n % 10] + words;
            n /= 10;
        }
        if (n == 0) return words;
        return nums[n] + " hundred" + words;
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        String n = sc.nextLine();
        String word = "";
        int place = 0, d=1;
        for(int i=n.length()-1;i>=0;i--){
            String temp = "0";
            if(d%3 == 0){
                temp = n.substring(i,i+3);
                word = thousand(Integer.parseInt(temp)) + large[place] + word;
                place++;
                
            }
            else if(i==0 && d%3 == 2){
                temp = n.substring(i,i+2);
                word = thousand(Integer.parseInt(temp)) + large[place] + word;
            }
            else if(i==0 && d%3 == 1){
                temp = n.substring(i,i+1);
                word = thousand(Integer.parseInt(temp)) + large[place] + word;
            }
            d++;
        }
        System.out.println(word);
    }
}