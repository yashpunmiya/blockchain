// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentVerification {
    struct Certificate {
        string holderName;
        string documentHash;
        uint256 issueDate;
        address issuer;
    }

    mapping(string => Certificate) public certificates;

    function issueCertificate(string memory docHash, string memory holderName) public {
        require(certificates[docHash].issueDate == 0, "Certificate already exists");
        certificates[docHash] = Certificate(holderName, docHash, block.timestamp, msg.sender);
    }

    function verifyCertificate(string memory docHash) public view returns (string memory, uint256, address) {
        Certificate memory cert = certificates[docHash];
        require(cert.issueDate != 0, "Certificate not found");
        return (cert.holderName, cert.issueDate, cert.issuer);
    }
}
