import java.util.*;
class palindrome{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        int rev = 0, num = n;
        while(num>0){
            int rem = num%10;
            rev = rev*10+rem;
            num/=10;
        }
        if(rev == n)
            System.out.println("It is a palindrome number");
        else
        System.out.println("It is not a palindrome number");
        sc.close();
    }
}