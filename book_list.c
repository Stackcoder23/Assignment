#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct book{  
    char *name;  
    char *author;
    struct book *next;   
}book; 

struct book *head; 

void create();
void insert();
void delete();
void traverse();
void search();

void main(){
    int choice =0;
    printf("Book Management System \n");  
    while (1)
    {
        printf("\nChoose an option : \n");
        printf(" 1)Create list\n 2)Insert book\n 3)Delete book\n 4)Traverse\n 5)Search\n 6)Exit\n");
        scanf("\n%d",&choice);  
        switch (choice)
        {
        case 1:
            create();
            break;
        case 2:
            insert();
            break;
        case 3:
            delete();
            break;
        case 4:
            traverse();
            break;
        case 5:
            search();
            break;
        case 6:
            exit(0);
            break;

        default:
            printf("\n Enter a valid chice \n");
            break;
        }
    }  
}

void create(){
    if(head != NULL){
        printf("\nlist is Already created...\n");
    }
    else{
        struct book *b;
        char bname[50];
        char bauth[50];
        b = (struct book *) malloc(sizeof(struct book *));
        if(b == NULL){
            printf("\nOVERFLOW\n");
        }  
        else{
            printf("\nEnter book name : ");
            scanf("%s" , bname);
            printf("\nEnter book author : ");
            scanf("%s" , bauth);
            b->name = malloc(10 + sizeof(b->name));
            b->author = malloc(10 + sizeof(b->author));
            strcpy(b->name, bname); 
            strcpy(b->author, bauth);
            b->next = NULL;
            head = b;
            printf("\nlist created\n");
        }
    }
}

void insert(){
    if(head == NULL){
        printf("\nList is not yet created\n");
    }
    else{
        struct book *b, *temp;
        char bname[50];
        char bauth[50];
        b = (struct book *) malloc(sizeof(struct book *));
        if(b == NULL)  
        {  
            printf("\nOVERFLOW\n");  
        } 
        else{
            printf("\nEnter book name : ");
            scanf("%s" , bname);
            printf("\nEnter book author : ");
            scanf("%s" , bauth);
            b->name = malloc(10 + sizeof(b->name));
            b->author = malloc(10 + sizeof(b->author));
            strcpy(b->name, bname); 
            strcpy(b->author, bauth);
            temp = head;  
            while (temp -> next != NULL)  
            {  
                temp = temp -> next;  
            }
            temp -> next = b;
            b->next = NULL;
            printf("\nNode inserted\n"); 
        }
    }
}

void traverse()  
{  
    struct book *b = head;
	
   while(b != NULL) {
      printf("\n%s\n",b->name);
      printf("%s\n",b->author);
      b = b->next;
   }
}

void search()  
{  
    struct book *b;
    char name[50];  
    int i=0,flag=1;  
    b = head;   
    if(b == NULL)  
    {  
        printf("\nEmpty List\n");  
    }  
    else  
    {   
        printf("\nEnter book name which you want to search?\n");   
        scanf("%s", name);  
        while (b!=NULL)  
        {  
            if(strcmp(b->name, name) == 0)  
            {  
                printf("book found at location %d ",i+1);  
                flag=0;  
            }     
            i++;  
            b = b -> next;  
        }  
        if(flag==1)  
        {  
            printf("book not found\n");  
        }  
    }     
          
}  

void delete(){
    struct book *b,*temp;
    char name[50];  
    int i=0,flag=1,index;  
    b = head;   
    if(b == NULL)  
    {  
        printf("\nEmpty List\n");  
    }  
    else  
    {   
        printf("\nEnter book name which you want to delete?\n");   
        scanf("%s", name);  
        while (b!=NULL)  
        {  
            if(strcmp(b->name, name) == 0)  
            {  
                index = i; 
                flag=0;  
            }     
            i++;  
            b = b -> next;  
        }  
        if(flag==1)  
        {  
            printf("Item not found\n");  
        } 
        else{
            b = head;
            for(i=0;i<index;i++)  {
                temp = b;
                b = b->next;
                if(b == NULL){
                    printf("\nCan't Delete\n");
                    return;
                }
            }
            temp->next = b->next;
            free(b);
            printf("Book deleted");
        } 
    }     
}