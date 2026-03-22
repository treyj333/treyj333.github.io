// Recon Scanner — WiFi scan cycle with Kotlin coroutines + StateFlow
// Excerpt from WifiViewModel.kt

data class WifiUiState(
    val results: List<WifiScanResult> = emptyList(),
    val isWifiEnabled: Boolean = true,
    val countdownSeconds: Int = 0,
    val isScanning: Boolean = false
)

@HiltViewModel
class WifiViewModel @Inject constructor(
    private val wifiRepository: WifiRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(WifiUiState())
    val uiState: StateFlow<WifiUiState> = _uiState.asStateFlow()

    init {
        observeWifiState()
        observeScanResults()
        startScanCycle()
    }

    private fun startScanCycle() {
        viewModelScope.launch {
            while (true) {
                if (_uiState.value.isWifiEnabled) {
                    _uiState.update {
                        it.copy(isScanning = true, countdownSeconds = 10)
                    }
                    wifiRepository.startScan()
                }
                for (remaining in 9 downTo 0) {
                    delay(1_000)
                    _uiState.update { it.copy(countdownSeconds = remaining) }
                }
            }
        }
    }
}
