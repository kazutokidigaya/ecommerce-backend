# SCHEMAS

- # User

  - firstname : String
  - lastname : String
  - email : String
  - password : String(Hashed)
  - Address : [
    -Address ( from address schema)
    ]

  -Orders : [
  {
  address : Address (from address schema)
  }
  ]

  - ## Product

    - name : String
    - stickerPrice : Number
    - markedPrice : Number
    - category : Category ( from category Schema)
    - image : string (URL)
    - compatibleWith : ["iPhone13","iPhone12","Apple Watch"]
    - stock : Number
    - color : String
    - weight : String
    - afd : Number (year manufactured in)

  - ## category
    - name : String
    - description : String
  - ## Order

    - address : Address (from address schema)
    - user : User ( from user schema)
    - products : [
      product : Product ( from product schema)
      ]
    - total : Number
    - status : ["payment_pending","payment_success","payment_errored"]

  - ## Address
    - houseNumber : String
    - fullAddress : String
    - landmark : string
