#include <string>
#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    string foo = "I am foo";
    string bar = "I am bar";
    string& fooRef = foo;
    cout<< fooRef << endl;
    fooRef = bar;
    const string& barRef = bar;
    //barRef += ". Hi"; // error
    cout<< fooRef << endl;
    if(fooRef == barRef) cout << 1 << endl;
    return 0;
}
