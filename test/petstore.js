const { expect, equal, have } = require('chai');
const { describe, it } = require('mocha');
const asserttype = require('chai-asserttype');
const chai = require('chai');
chai.use(asserttype);
const {
    postPet,
    getPet,
    deletePet,
    updatePet
} = require('../endpoints/petstore.js')
const {
    getToken,
    detailedErrorMessage
} = require('../endpoints/common.js');
const {
    randomNumberGenerator,
    randomNameGenerator
} = require('../utilities/genericUtils.js');


describe('API end points for Petstore:', function () {
    console.log('************************************');
    console.log(`Starting API Tests for "Petstore"`);

    describe('order creation and deletion', function () {
        let petId, petName, petCatagoryId, petCatagoryName;

        it('create new order, verify in system, delete the order, and verify delete', async () => {
            // ############ Create Test Order Data Filler ############
            petId = randomNumberGenerator(10);
            petName = randomNameGenerator(10)
            petCatagoryId = randomNumberGenerator(10);
            petCatagoryName = randomNameGenerator(10);

            // ############ Get Token ############
            // No authorization necessary
            // ############ Create Petstore Pet Order Test Data ############
            let sendData = {
                "id": petId,
                "category": {
                    "id": petCatagoryId,
                    "name": petCatagoryName
                },
                "name": petName,
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            };
            // Create a Petstore Test Order
            let postPetResponse = await postPet(sendData);
            // ############ Verify Results ############
            expect(postPetResponse, await detailedErrorMessage(postPetResponse)).to.have.status(200);
            // ############ Check Order in Petstore ############
            if (postPetResponse) {
                let getPetResponse = await getPet(petId);
                expect(getPetResponse, await detailedErrorMessage(getPetResponse)).to.have.status(200);
                expect(getPetResponse.body.id, await detailedErrorMessage(getPetResponse)).to.equal(petId);
                expect(getPetResponse.body.name, await detailedErrorMessage(getPetResponse)).to.equal(petName);
                expect(getPetResponse.body.category.id, await detailedErrorMessage(getPetResponse)).to.equal(petCatagoryId);
                expect(getPetResponse.body.category.name, await detailedErrorMessage(getPetResponse)).to.equal(petCatagoryName);
                // ############ Detele Order in Petstore ############
                if(getPetResponse) {
                    let deletePetResponse = await deletePet(petId);
                    expect(deletePetResponse, await detailedErrorMessage(deletePetResponse)).to.have.status(200);
                    // ############ Verify Pet Order is no longer in Petstore ############
                    if (deletePetResponse) {
                        let getPetResponse = await getPet(petId);
                        expect(getPetResponse, await detailedErrorMessage(getPetResponse)).to.have.status(404);
                    }
                }
            }

        });
   
    });

});