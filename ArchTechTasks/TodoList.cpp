#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> tasks;
    int choice;

    while (true)
    {
        cout << "\n1. Add Task\n2. View Tasks\n3. Remove Task\n4. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1)
        {
            cin.ignore();
            string task;
            cout << "Enter task: ";
            getline(cin, task);
            tasks.push_back(task);
        }
        else if (choice == 2)
        {
            if (tasks.empty())
            {
                cout << "No tasks available\n";
            }
            else
            {
                for (int i = 0; i < tasks.size(); i++)
                {
                    cout << i + 1 << ". " << tasks[i] << endl;
                }
            }
        }
        else if (choice == 3)
        {
            if (tasks.empty())
            {
                cout << "No tasks to remove\n";
            }
            else
            {
                int num;
                cout << "Enter task number to remove: ";
                cin >> num;

                if (num > 0 && num <= tasks.size())
                {
                    tasks.erase(tasks.begin() + num - 1);
                }
                else
                {
                    cout << "Invalid number\n";
                }
            }
        }
        else if (choice == 4)
        {
            break;
        }
        else
        {
            cout << "Invalid choice\n";
        }
    }

    return 0;
}
