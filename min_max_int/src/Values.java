public class Values
{

    int []nums={3, 4, -1, 1,12,44};

    public void Getmin()
    {
        int min=Integer.MAX_VALUE;
        for(int x:nums)
        {
            if(x<min)
            {
                min=x;
            }
        }
        System.out.println("The min int val "+min);
    }

    public void GetMax()
    {
        int max=Integer.MIN_VALUE;
        for(int y:nums)
        {
            if(y>max)
            {
                max=y;
            }
        }
        System.out.println("The max int val "+max);

    }


}