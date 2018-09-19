#include <iostream>

int add(int a = 1, int b = 1){
    return a + b;
}

int main(int argc, char const *argv[])
{
    int i = add();
    int j = add(2,3);
    std::cout<<i<<","<<j<<std::endl;
    return 0;
}
