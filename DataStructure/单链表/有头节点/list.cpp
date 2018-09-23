/******************
 * 
 */
 
 #include<stdio.h>
 #include<stdlib.h>

 typedef struct Node{
     int data;
     struct Node * pNext;
 }NODE,*PNODE;

 PNODE create_list();
 void traverse_list(PNODE);
 bool is_empty(PNODE);
 int length_list(PNODE);
 void sort_list(PNODE);
 bool insert_list(PNODE, int, int);
 bool delete_list(PNODE, int ,int *);
 void clear_list(PNODE);

 int main(int argc, char const *argv[])
 {
     
     return 0;
 }

 PNODE create_list(){
     int val;
     PNODE pHead = (PNODE)malloc(sizeof(PNODE));
     PNODE pCurrent = pHead;
     pCurrent->pNext = NULL;
     if(NULL == pHead){
         printf("pHead malloc failed!");
         exit(-1);
     }
     printf("Input first data (q to quit):");
     while(scanf("%d",&val) == 1){
        PNODE pNew = (PNODE)malloc(sizeof(NODE));
        if(NULL == pNew){
            printf("pNew malloc failed!");
            exit(-1);
        }
        pNew->data = val;
        pCurrent->pNext = pNew;
        pNew->pNext = NULL;
        pCurrent = pNew;
        printf("Input next data(q to quit):");
     }
     return pHead;
 }

 void traverse_list(PNODE pHead){
     PNODE pCurrent = pHead->pNext;
     printf("now dataes in the list arre\n");
     while(pCurrent != NULL){
         printf("%d ",pCurrent->data);
         pCurrent = pCurrent->pNext;
     }
     printf("\n");
 }

 bool is_empty(PNODE pNode){
     if(NULL == pNode->pNext) return true;
     return false;
 }

 int length_list(PNODE pNode){
     int count = 0;
     PNODE pCurrent = pNode->pNext;
     while(pCurrent != NULL){
         count++;
         pCurrent = pCurrent->pNext;
     }    
     return count;
 }

 void sort_list(PNODE pHead){
     PNODE p,q;
 }
 