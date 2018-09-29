#ifndef _STACK_CPP_H_
#define _STACK_CPP_H_
class Node{
    public:
        Node(int value, Node * pNext);
        ~Node();
        void setValue(int value);
        int getValue() {return m_value;}
        void setNext(Node * pNext);
        Node * getNext(){return m_pNext;}
    private:
        int m_value;
        Node * m_pNext;
};

class StackCpp{
    public:
        static StackCpp * create();
    public:
        StackCpp();
        ~StackCpp();
        void push(int value);
        bool pop();
        bool isEmpty();
        void clear();
        void outPut();
    private:
        Node * m_pTop;
        Node * m_pBottom;
};

#endif