#include "Dog.h"

Dog::Dog(){
    std::cout<< "a dog had been constructed\n";
}
void Dog::setName(const std::string& dogname){
    name = dogname;
}
void Dog::print() const{
    std::cout << "Dog is " << name << " and weights " << weight << endl;
}
Dog::~Dog(){
    std::cout<< "Goodbye " << name << std::endl;
}