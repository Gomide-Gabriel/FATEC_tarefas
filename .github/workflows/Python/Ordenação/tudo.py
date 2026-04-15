# Selection 

my_array = [64, 34, 25, 5, 22, 11, 90, 12]

n = len(my_array)
for i in range(n-1):
    min_index = i
    for j in range(i+1, n):
        if my_array[j] < my_array[min_index]:
            min_index = j
    min_value = my_array.pop(min_index)
    my_array.insert(i, min_value)

print("Sorted array:", my_array)


# Insertion 

my_array2 = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array2)
for i in range(1,n):
    insert_index = i
    current_value = my_array2.pop(i)
    for j in range(i-1, -1, -1):
        if my_array2[j] > current_value:
            insert_index = j
    my_array2.insert(insert_index, current_value)

print("Sorted array:", my_array2)

# Bubble sort

my_array3 = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array3)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array3[j] > my_array3[j+1]:
            my_array3[j], my_array3[j+1] = my_array3[j+1], my_array3[j]

print("Sorted array:", my_array3)

# Merge Sort

class merge:

    def mergeSort(arr):
        if len(arr) <= 1:
            return arr

        mid = len(arr) // 2
        leftHalf = arr[:mid]
        rightHalf = arr[mid:]

        sortedLeft = mergeSort(leftHalf)
        sortedRight = mergeSort(rightHalf)

        return merge(sortedLeft, sortedRight)

    def merge(left, right):
        result = []
        i = j = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1

        result.extend(left[i:])
        result.extend(right[j:])

        return result

    unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
    sortedArr = mergeSort(unsortedArr)
    print("Sorted array:", sortedArr)


# Quick Sort


class Quick:
def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index-1)
        quicksort(array, pivot_index+1, high)

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(my_array)
print("Sorted array:", my_array)