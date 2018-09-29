#include "stack_cpp.h"
int main(int argc, char const *argv[])
{
    StackCpp * pStack = StackCpp::create();
    pStack->push(2);
    pStack->push(6);
    pStack->push(28);
    pStack->outPut();
    pStack->pop();
    pStack->outPut();
    pStack->clear();
    pStack->outPut();
    return 0;
}
