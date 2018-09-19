#include <stdio.h>
#include <stdlib.h>
typedef struct Node{
    int data;
    struct Node * pNext;
}Node;
typedef struct Stack{
    struct Node * pTop;
    struct Node * pBottom;
}Stack;

Stack* create();
void push(Stack *, int);
bool pop(Stack *, int *);
bool isEmpty(Stack *);
void clear(Stack *);
void outPut(Stack *);

int main(int argc, char const *argv[])
{
    int data_pop;
    Stack * pStack = create();

    push(pStack, 2);
    push(pStack, 6);
    push(pStack, 28);
    
    outPut(pStack);

    if(pop(pStack, &data_pop)){
        printf("pop success, %d \n", data_pop);
    }
    else{
        printf("pop failed");
    }

    outPut(pStack);

    clear(pStack);
    printf("data cleard\n");

    outPut(pStack);
    return 0;
}

Stack * create(){
    Stack * pRet = (Stack *) malloc(sizeof(Stack*));
    pRet->pTop = (Node *)malloc(sizeof(Node *));
    if(!pRet || !pRet->pTop){
        printf("malloc failed");
        exit(-1);
    }
    pRet->pBottom = pRet->pTop;
    pRet->pBottom->pNext = NULL;
    return pRet;
}

void push(Stack * pStack, int val){
    Node * pNode = (Node *) malloc(sizeof(Node*));
    if(!pNode) {
        printf("malloc failed");
        exit(-1);
    }
    pNode->data = val;
    pNode->pNext = pStack->pTop;
    pStack->pTop = pNode;
}

bool pop(Stack * pStack , int * pData){
    if(isEmpty(pStack)) return false;

    Node * pNode = pStack->pTop;
    *pData = pNode->data;
    pStack->pTop = pNode->pNext;
    free(pNode);
    pNode = NULL;
    return true;
}

bool isEmpty(Stack * pStack){
    return pStack->pTop == pStack->pBottom;
}

void clear(Stack * pStack){
    if(isEmpty(pStack)) return;
    Node * pNode = pStack->pTop;
    Node * pNext = NULL;
    while(pNode != pStack->pBottom){
        pNext = pNode->pNext;
        free(pNode);
        pNode = pNext;
    }
    pStack->pTop = pStack->pBottom;
}

void outPut(Stack * pStack){
    Node * pCurrent = pStack->pTop;
    printf("Now datas in the stack are: \n");
    while(pCurrent != pStack->pBottom){
        printf("%d ", pCurrent->data);
        pCurrent = pCurrent->pNext;
    }
    printf("\nOut put data end\n");
}