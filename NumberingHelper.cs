namespace BlazorAppWasmPWALottieRive
{
    public class NumberingHelper
    {
        public int NumberOfAnimationPlayed { get; set; }
        public int MaxLimit { get; set; }
        public IEnumerable<int>? LottieAnimList { get; set; }
        public bool isUpdateReady { get; set; } = false;


        public void PWAUpdaterService_NextVersionIsWaiting(object sender, EventArgs e)
        {
            // Add your logic here to show the notification to the users
            isUpdateReady = true;
            
        }
    }
}
