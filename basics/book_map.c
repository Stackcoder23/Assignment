#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct book{    
    char *name;
    char *author;
    struct book *next;   
};

void insert();
void search();
void display();

struct book *hash_table[10];

void main(){
    int choice =0;
    printf("Book Management System \n");  
    while (1)
    {
        printf("\nChoose an option : \n");
        printf(" 1)Insert book\n 2)Search\n 3)Display\n 4)Exit\n");
        scanf("\n%d",&choice);  
        switch (choice)
        {
        case 1:
            insert();
            break;
        case 2:
            search();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
            break;

        default:
            printf("\n Enter a valid chice \n");
            break;
        }
    }  
}

void insert(){
    char bname[50];
    char bauth[50];
    printf("\nEnter book name : ");
    scanf("%s" , &bname);
    printf("\nEnter book Author : ");
    scanf("%s" , &bauth);
    char *name = bname;
    char *auth = bauth;
    int ascii = 0;
    for(int i = 0; i < strlen(name); i++){
        ascii = ascii + (int) bname[i];
    }
    if(hash_table[ascii % 10] == NULL){
        struct book *b;
        b = (struct book *) malloc(sizeof(struct book *));
        b->name = malloc(30 + sizeof(b->name));
        b->author = malloc(30 + sizeof(b->author));
        b->next = NULL;
        strcpy(b->name, bname); 
        strcpy(b->author, bauth); 
        hash_table[ascii % 10] = b;
    }
    else{
        struct book *b, *temp;
        b = (struct book *) malloc(sizeof(struct book *));
        b->name = malloc(30 + sizeof(b->name));
        b->author = malloc(30 + sizeof(b->author));
        strcpy(b->name, bname); 
        strcpy(b->author, bauth); 
        temp = hash_table[ascii % 10];
        while (temp -> next != NULL){  
            temp = temp -> next;  
        }  
        temp -> next = b;
        b->next = NULL;
    }
}

void search(){
    struct book *temp;
    char bname[50];
    printf("\nEnter book name you want to search : ");
    scanf("%s" , &bname);
    char *name = bname;
    int ascii = 0;
    for(int i = 0; i < strlen(name); i++){
        ascii = ascii + (int) bname[i];
    }
    temp = hash_table[ascii % 10];
    while(temp != NULL){
        if(strcmp(temp->name, name) == 0){
            printf("%s : %s found at %d\n", temp->name, temp->author, ascii  % 10);
            return;
        }
        temp = temp->next;
    }
    printf("book not found\n");
}

void display(){
    for(int i=0;i<10;i++){
        struct book *b;
        b = hash_table[i];
        if(b == NULL){
            printf("null : null\t");
        }
        while (b != NULL)
        {
            printf(" -> %s : %s", b->name, b->author);
            b = b->next;
        }
        printf("\n");
    }
}