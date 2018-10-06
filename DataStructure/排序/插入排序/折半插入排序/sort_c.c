#include<stdio.h>
#include<stdlib.h>

void BInsert_sort(int * arr, int len){
    int i;
    for(i = 1; i < len; i++){
        int low = 0;
        int high = i - 1;
        int key = arr[i];
        while(low <= high){
            int mid = (low + high) / 2;
            if(key < arr[mid]) high = mid - 1;
            else low = mid + 1;
        }
        int j;
        for(j = i; j > low; j--) arr[j] = arr[j - 1];
        arr[low] = key;
    }
}

void sort(int arr[], int len){
    int i;
    for(i = 1; i < len; i++){
        int low = 0;
        int high = i - 1;
        int key = arr[i];
        while(low <= high){
            int mid = (low + high) / 2;
            if(key < arr[mid]) high = mid - 1;
            else low = mid + 1;
        }
        int j;
        for(j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        arr[low] = key;
    }
}

int main(int argc, char const *argv[])
{
    int num = 10;
    //int * arr = (int * )malloc(num * sizeof(int));
    int arr[10] = {1,2,7,4,5,8,0,6,9,3};
    int i;
    //scanf("%d", &num);
    //for(i = 0; i < num; i++) scanf("%d", arr + i);
    //BInsert_sort(&arr, num);
    sort(arr, num);
    for(i = 0; i < num; i++) printf("%d ", arr[i]);
    return 0;
}
