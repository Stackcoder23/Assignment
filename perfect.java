import java.util.*;
class perfect{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        int sum=0;
        if(n<=1){
            System.out.print("Not a perfect number");
        }
        else{
            for(int i=1;i<=n/2;i++){
                if(n%i == 0){
                    sum=sum+i;
                }
            }
            if(sum == n)
                System.out.print("Perfect number");
            else
                System.out.print("Not a perfect number");
        }
    }
}