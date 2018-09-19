#include<string>
#include<iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    string myString = "hello";
    string myOthreString = " world";
    cout << myString + myOthreString << endl;
    cout << myString + " You" << endl;
    myString.append(" Dog");
    cout << myString << endl;
    return 0;
}
