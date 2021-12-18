import java.util.*;
class matrixmulti{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows : ");
        int rows = sc.nextInt();
        System.out.print("Enter the number of columns : ");
        int cols = sc.nextInt();
        int[][] mat1 = new int[rows][cols];
        int[][] mat2 = new int[rows][cols];
        System.out.println("Enter the Matrix 1 : ");
        for(int i=0;i<rows;i++)
            for(int j=0;j<cols;j++)
                mat1[i][j] = sc.nextInt();

        System.out.println("Enter the Matrix 2 : ");
        for(int i=0;i<rows;i++)
            for(int j=0;j<cols;j++)
                mat2[i][j] = sc.nextInt();

        int[][] mat3 = new int[rows][cols];
        System.out.println("Multiplication : ");
        for(int i=0;i<rows;i++){    
            for(int j=0;j<cols;j++){    
                mat3[i][j]=0;      
                for(int k=0;k<cols;k++){      
                    mat3[i][j]+=mat1[i][k]*mat2[k][j];     
                }
                System.out.print(mat3[i][j]+" "); 
            }
            System.out.println("");
        }
    }
}