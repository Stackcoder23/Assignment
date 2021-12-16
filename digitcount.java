import java.util.Scanner;
class digitcount{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        int[] arr = new int[10];
        while(n!=0){
            int rem = n%10;
            n = n/10;
            arr[rem]++;
        }
        for(int i=0;i<arr.length;i++)
            if(arr[i]>0)
                System.out.println(i + " : " + arr[i]);
    }
}