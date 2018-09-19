#include <string>
#include <iostream>
class Dog{
    std::string name;
    int weight;
    public:
        Dog();
        void setName(const std::string & name);
        void setWeight(int weight);
        virtual void print() const;
        void bark() const {std::cout<< name << " barks!\n";};
        virtual ~Dog();
};