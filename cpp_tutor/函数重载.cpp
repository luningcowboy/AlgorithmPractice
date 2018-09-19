#include<iostream>
using namespace std;

void print(const char* myString){
    cout<<myString<<endl;
}
void print(int myInt){
    cout<<myInt<<endl;
}
int main(int argc, char const *argv[])
{
    print("hello");
    print(10);
    return 0;
}
