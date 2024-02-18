// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FIRContract {
    struct FIR {
        uint256 firNumber;
        uint256 userId;
        uint256 dateOfLaunch;
        string nameOfLauncher;
        string district;
        string policeStation;
        int256 policeStationCode;
        string dob;
        string dateOfCrime;
        string placeOfCrime;
        string descriptionOfCrime;
        string evidence_ID;
        string[] updates;
    }

    FIR[] private firList;
    uint256 private firNumber;

    constructor() {
        firNumber = 0;
    }

    function raiseFIR(
        uint256 userId,
        string memory name,
        string memory district,
        string memory policeStation,
        int256 policeStationCode,
        string memory birthDate,
        string memory dateOfCrime,
        string memory placeOfCrime,
        string memory description,
        string memory evidenceID
    ) public returns (uint256) {
        firNumber++;
        firList.push(
            FIR(
                firNumber,
                userId,
                block.timestamp,
                name,
                district,
                policeStation,
                policeStationCode,
                birthDate,
                dateOfCrime,
                placeOfCrime,
                description,
                evidenceID,
                new string[](0)
            )
        );
        return firNumber;
    }

    function retrieveFIR(uint256 id) public view returns (FIR memory) {
        if (id > 0 && id <= firList.length) {
            return firList[id - 1];
        } else {
            revert("Invalid FIR Number");
        }
    }

    function allPoliceStationFIR(int256 policeStationCode)
        public
        view
        returns (FIR[] memory)
    {
        uint256 count = 0;
        for (uint256 i = 0; i < firList.length; i++) {
            if (firList[i].policeStationCode == policeStationCode) {
                count++;
            }
        }

        FIR[] memory result = new FIR[](count);
        uint256 j = 0;
        for (uint256 i = 0; i < firList.length; i++) {
            if (firList[i].policeStationCode == policeStationCode) {
                result[j] = firList[i];
                j++;
            }
        }

        return result;
    }

    function retrieveByUserId(uint256 userId)
        public
        view
        returns (FIR[] memory)
    {
        uint256 count = 0;

        for (uint256 i = 0; i < firList.length; i++) {
            if (firList[i].userId == userId) {
                count++;
            }
        }

        FIR[] memory result = new FIR[](count);
        uint256 j = 0;

        for (uint256 i = 0; i < firList.length; i++) {
            if (firList[i].userId == userId) {
                result[j] = firList[i];
                j++;
            }
        }

        return result;
    }
}