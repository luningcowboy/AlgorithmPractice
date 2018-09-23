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
     int len;
     int data_del;
     PNODE pHead = NULL;

     pHead = create_list();
     traverse_list(pHead);

     len = length_list(pHead);

     if(!is_empty(pHead)){
         printf("the length of hte list is :%d\n",len);
     }

     if(insert_list(pHead, 3,78)){
         printf("insert succeed");
     }
     else{
         printf("insert failed");
     }

     traverse_list(pHead);

     if(delete_list(pHead, 3, &data_del)){
         printf("delete succeed, the deleted data is:%d\n", data_del);
     }
     else printf("delete failed");

     traverse_list(pHead);

     sort_list(pHead);
     printf("after sorted");
     traverse_list(pHead);

     clear_list(pHead);
     printf("after cleared");
     traverse_list(pHead);
     traverse_list(pHead);
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
     int tmp;
     for(p = pHead->pNext; p!=NULL; p=p->pNext){
         if(p->data > q->data){
             tmp = p->data;
             p->data = q->data;
             q->data = tmp;
         }
     }
 }

 bool insert_list(PNODE pHead, int pos, int val){
     int i = 0;
     PNODE p = pHead;
     while(p != NULL && i < pos){
         p = p->pNext;
         i++;
     }
     if(i > pos || p == NULL) return false;

     PNODE pNew = (PNODE)malloc(sizeof(NODE));
     if(NULL == pNew){
         printf("pNew malloc failed");
         exit(-1);
     }
     pNew->data = val;
     pNew->pNext = p->pNext;
     p->pNext = pNew;
     return true;
 }

 bool delete_list(PNODE pHead, int pos, int * pData){
     int i = 0;
     PNODE p = pHead;
     while(p->pNext != NULL && i < pos -1){
         p = p->pNext;
         i++;
     }
     if(i > pos - 1 || p->pNext == NULL) return false;

     PNODE q = p->pNext;
     *pData = q->data;
     p->pNext = p->pNext->pNext;
     free(q);
     q = NULL;
     return true;
 }
 
 void clear_list(PNODE pHead){
     PNODE p = pHead->pNext;
     PNODE r = NULL;
     while(p != NULL){
         r = p->pNext;
         free(p);
         p = r;
     }
     pHead->pNext = NULL;
 }