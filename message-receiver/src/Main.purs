module Main where

import Prelude

import Data.Either (Either(..))
import Data.Semigroup.Foldable (intercalateMap)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Effect.Class.Console (log)
import Foreign (renderForeignError)

import Foreign.Object as FO
import Milkis as M
import Milkis.Impl.Node (nodeFetch)
import Simple.JSON (readJSON, writeJSON)

type Input
  = { body :: String
    }

type Output
  = { statusCode :: Int,
      body :: String,
      isBase64Encoded :: Boolean,
      headers :: FO.Object String
    }

type Location
  = { lon :: Number
    , lat :: Number
    }

type VoucherOffer
  = { info :: String
    , location :: Location
    }

example :: String
example =
  """
  { "info": "I have vouchers", 
    "location": { "lon": 52.52437, "lat": 13.41053 }
  }
  """

fetch :: M.Fetch
fetch = M.fetch nodeFetch

fetchGoogle :: Aff M.Response
fetchGoogle = fetch (M.URL "https://www.google.com") M.defaultFetchOptions

logVoucherOffer :: VoucherOffer -> Aff Unit
logVoucherOffer vo = log (writeJSON vo)

main :: Effect Unit
main =
  launchAff_ do
    let
      voucherOffer = readJSON example
    case voucherOffer of
      Left errors -> log (intercalateMap "\n" renderForeignError errors)
      Right ok -> logVoucherOffer ok
    response <- fetchGoogle
    text <- M.text response
    log text

responseHeaders :: FO.Object String
responseHeaders = FO.empty

run :: Input -> Effect Output
run { body } = do
  log $ "Received body " <> body
  pure $ { statusCode : 200, body: responseBody, isBase64Encoded : false , headers : responseHeaders }
  where
  responseBody = writeJSON { hello: "World" } 
  
-- handler :: Input -> Output
-- handler = unsafePerformEffect <<< run

