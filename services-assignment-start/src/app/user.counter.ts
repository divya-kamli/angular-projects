export class CounterService
{
    activeCnt: number = 0;
    inActiveCnt: number = 0;

    updateCounter(act:boolean,inact:boolean)
    {
        if(act==true)
        {
            this.activeCnt++;
        }
        else{
            this.inActiveCnt++;
        }
    }
}