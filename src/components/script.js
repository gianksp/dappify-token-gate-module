// Behavior
async function script(props) {
  if (!props.contract) return;

  const abi = [
    {
      constant: true,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const hasPositiveBalance = async () => {
    if (!window.walletProvider) return false;
    let numericBalance = 0;

    // Retrieve account
    try {
      const provider = new ethers.providers.Web3Provider(window.walletProvider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(props.contract, abi, signer);
      const account =
        window.walletProvider?.accounts &&
        window.walletProvider?.accounts?.length > 0
          ? window.walletProvider?.accounts[0]
          : window.walletProvider.selectedAddress;
      const balance = await contract.balanceOf(account);
      numericBalance = balance.toNumber();
    } catch (e) {
      console.log(e);
    }
    return numericBalance > 0;
  };

  const evalCondition = async () => {
    const isBalanceValid = await hasPositiveBalance();
    if (isBalanceValid) {
      show();
    } else {
      hide();
    }
  };

  const compId = process.env.MODULE_ID
  const hide = () => {
    $(`#${compId}`).css("display", "none");
  };

  const show = () => {
    $(`#${compId}`).css("display", "block");
  };

  document.addEventListener("Connected", () => evalCondition());
  document.addEventListener("accountsChanged", () => evalCondition());
  document.addEventListener("chainChanged", () => evalCondition());
  document.addEventListener("networkChanged", () => evalCondition());
  document.addEventListener("onDisconnect", () => hide());

  evalCondition();
}

export default script;
