#include<stdio.h>
#include<stdlib.h>

typedef struct Node{
    int data;
    struct Node * pNext;
}NODE,*PNODE;

typedef struct Stack{
    PNODE pTop;
    PNODE pBottom;
}STACK,*PSTACK;

PSTACK create_stack();
void push_stack(PSTACK, int);
void traverse_stack(PSTACK);
bool pop_stack(PSTACK, int *);
bool is_empty(PSTACK);
void clear_stack(PSTACK);

int main(int argc, char const *argv[])
{
    int data_pop;
    PSTACK ps = create_stack();

    push_stack(ps, 2);
    push_stack(ps, 6);
    push_stack(ps, 28);

    traverse_stack(ps);

    if(pop_stack(ps, &data_pop)){
        printf("pop successed, the data poped out was: %d \n",data_pop);
    }
    else printf("pop data failed.");

    traverse_stack(ps);

    clear_stack(ps);
    printf("data cleard!\n");

    traverse_stack(ps);
    return 0;
}

PSTACK create_stack(){
    PSTACK pS = (PSTACK) malloc (sizeof(PSTACK));
    pS->pTop = (PNODE) malloc(sizeof(PNODE));
    if(NULL == pS || NULL == pS->pTop){
        printf("malloc failed");
        exit(-1);
    }
    else{
        pS->pBottom = pS->pTop;
        pS->pBottom->pNext = NULL;
    }
    return pS;
}
bool is_empty(PSTACK pS){
    if(pS->pTop == pS->pBottom) return true;
    return false;
}
void push_stack(PSTACK pS, int val){
    PNODE pNew = (PNODE) malloc(sizeof(PNODE));
    if(NULL == pNew){
        printf("malloc failed");
        exit(-1);
    }
    else{
        pNew->data = val;
        pNew->pNext = pS->pTop;
        pS->pTop = pNew;
    }
    return;
}

bool pop_stack(PSTACK pS, int *pData){
    if(is_empty(pS)) return false;
     
    PNODE p = pS->pTop;
    *pData = p->data;
    pS->pTop = p->pNext;
    free(p);
    p = NULL;
    return true;
}

void traverse_stack(PSTACK pS){
    PNODE pCurrent = pS->pTop;
    printf("Now datas in the stack are:\n");
    while(pCurrent != pS->pBottom){
        printf("%d ", pCurrent->data);
        pCurrent = pCurrent->pNext;
    }
    printf("\ntraverse_stack end \n");
}

void clear_stack(PSTACK pS){
    if(is_empty(pS)) return;
    PNODE p = pS->pTop;
    PNODE r = NULL;
    while(p != pS->pBottom){
        r = p->pNext;
        free(p);
        p = r;
    }
    pS->pTop = pS->pBottom;
}