#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    srand(time(0));

    char choice;

    do
    {
        int die1 = rand() % 6 + 1;
        int die2 = rand() % 6 + 1;

        cout << "Die 1: " << die1 << endl;
        cout << "Die 2: " << die2 << endl;

        cout << "Roll again? (y/n): ";
        cin >> choice;

    } while (choice == 'y' || choice == 'Y');

    return 0;
}
