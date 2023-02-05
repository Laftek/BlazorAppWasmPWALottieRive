namespace BlazorAppWasmPWALottieRive
{
    public class NumberingHelper
    {
        public int NumberOfAnimationPlayed { get; set; }
        public int MaxLimit { get; set; }
        public IEnumerable<int>? LottieAnimList { get; set; }
        public bool isUpdateReady { get; set; } = false;
    }
}
