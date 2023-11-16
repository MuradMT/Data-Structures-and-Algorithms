/*
 * 1)Microvawe - weight:8, value:50
 * 2)Drone - weight:2, value:150
 * 3)Monitor - weight:6, value:210
 * 4)Kettle - weight:1, value:30
 * Total capacity of container can hold 10 kgs
 */
const int n = 4;
const int maxCapacity = 10;
int[] weights = new int[] { 0, 8, 2, 6, 1 };
int[] values = new int[] {0,50,150,210,30};
int[,] data = new int[n+1, maxCapacity + 1];//5,11
for (int i = 0; i <=n; i++)
{
    for (int j = 0; j <=maxCapacity; j++)
    {
        if (i == 0|| j == 0)
        {
            data[i,j] = 0;
        }
        else if (weights[i]<=j)
        {
           data[i,j]= Math.Max(values[i] + data[i - 1, j - weights[i]], data[i-1,j]);
        }
        else
        {
            data[i, j] = data[i - 1, j];
        }
    }
}
Console.WriteLine($"Max value of items included in container: {data[n,maxCapacity]}");