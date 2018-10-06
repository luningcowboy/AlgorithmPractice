#include "stack_cpp.h"
#include<iostream>

using namespace std;

Node::Node(int value, Node * pNext){
    m_value = value;
    m_pNext = pNext;
}
void Node::setValue(int value){
    m_value = value;
}
void Node::setNext(Node * pNext){
    m_pNext = pNext;
}

StackCpp * StackCpp::create(){
    StackCpp * pRet = new StackCpp();
    return pRet;
}
StackCpp::StackCpp(){
    m_pTop = new Node(0,nullptr);
    m_pBottom = m_pTop;
    m_pTop->setNext(m_pBottom);
    m_pBottom->setNext(nullptr);
}
void StackCpp::push(int value){
    Node * pNode = new Node(value, nullptr);
    pNode->setNext(m_pTop);
    m_pTop = pNode;
}
bool StackCpp::isEmpty(){
    return m_pTop == m_pBottom;
}
bool StackCpp::pop(){
    if(isEmpty()) return false;
    Node * pNext = m_pTop->getNext();
    delete m_pTop;
    m_pTop = pNext;
    return true;
}
void StackCpp::clear(){
    if(isEmpty()) return;
    Node * pCurrent = m_pTop;
    Node * pTmp = nullptr;
    while(pCurrent != m_pBottom){
        pTmp = pCurrent->getNext();
        delete pCurrent;
        pCurrent = nullptr;
        pCurrent = pTmp;
    }
    m_pTop = m_pBottom;
}
void StackCpp::outPut(){
    if(isEmpty()) return;
    Node * pCurrent = m_pTop;
    while(pCurrent != m_pBottom){
        cout<<pCurrent->getValue()<<endl;
        pCurrent = pCurrent->getNext();
    }
}