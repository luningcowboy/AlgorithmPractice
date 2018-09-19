#include<iostream>

namespace First
{
    namespace Nexted{
        void foo(){
            printf("this is First::Nextd::foo\n");
        }
    }
} // First

namespace Second{
    void foo(){
        printf("this is Second::foo\n");
    }
}
void foo(){
    printf("this is global foo\n");
}

int main(int argc, char const *argv[])
{
    foo(); // this is global foo
    First::Nexted::foo(); // this is First::Nextd::foo
    Second::foo(); // this is Second::foo
    return 0;
}
