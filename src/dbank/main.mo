import Debug "mo:base/Debug";
import Int "mo:base/Int";

actor DBank {
  var currentValue : Nat = 300;
  currentValue := 100;

  let id = 326147136437;

  // Debug.print(debug_show (currentValue));
  // Debug.print(debug_show (id));

  public func topUp(amount : Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };
  public func withdraw(amount : Nat) {
    let tempValue : Int = currentValue -amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Amount too large , currentValue");
    };
  };

  public query func checkBalance() : async Nat {
    return currentValue;
  };

  // topUp();
};
