
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client'


function App() {


  return (
    <div className="app">
      <header>
        <img src='../src/assets/Airbnb_Logo_Bélo.svg.png' className='All-logo' alt='logo' width="250" />

        <h4>Power BI Dashboard </h4>
        <PowerBIEmbed 
              embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
              id: "03dcc690-947c-483f-87b2-a724edfcad91",
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=03dcc690-947c-483f-87b2-a724edfcad91&groupId=8de4c42d-4d1e-4823-a3ed-2c29f99fdbe4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
              accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYWEyMzJkYjItN2E3OC00NDE0LWE1MjktMzNkYjkxMjRjYmE3LyIsImlhdCI6MTcyNzIwMDY3NywibmJmIjoxNzI3MjAwNjc3LCJleHAiOjE3MjcyMDUxODEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFCUFN0b3JiczAyb0drNmZ2Uk42K2VSR1M0RW9sZVpQa2c5UldTam9iMjhZek85MFVDSTlJN0hqSXFUTC9QSFJtIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU0UvMjAxOS8wMzYiLCJnaXZlbl9uYW1lIjoiU0lMVkEgRC5ELlMuUi4iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNDAyOjQwMDA6YjI4MDo0ZjQxOjIwYjk6MjE1MzoyNGQwOmQzMmYiLCJuYW1lIjoiU0UvMjAxOS8wMzYgLSBTSUxWQSBELkQuUy5SLiIsIm9pZCI6IjBjZjQ0ZDYyLTNjNzgtNDUzNy1iZGVkLWZkMTc0N2I5NTQ1YSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xNDM2NjgxMjU5LTI0NDE0MzI4NzMtMjUxNTQ3ODUwNS05ODQxMSIsInB1aWQiOiIxMDAzMjAwMTRDMjBDMzdGIiwicmgiOiIwLkFWVUFzaTBqcW5oNkZFU2xLVFBia1NUTHB3a0FBQUFBQUFBQXdBQUFBQUFBQUFDX0FLdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJ5a09XMXhmejNKdkpITUx6aTNKczBfMFJGU1RlVkRkZk5vQ29PUmFPMjAwIiwidGlkIjoiYWEyMzJkYjItN2E3OC00NDE0LWE1MjktMzNkYjkxMjRjYmE3IiwidW5pcXVlX25hbWUiOiJzaWx2YWRkLXNlMTkwMzZAc3R1Lmtsbi5hYy5sayIsInVwbiI6InNpbHZhZGQtc2UxOTAzNkBzdHUua2xuLmFjLmxrIiwidXRpIjoiQ2RZNThUdGxWMGVIWHc5TzFBdERBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjYifQ.EUh3N39qZO1TkrHMZHqk0QauEGh6NOBZv4RZjg1ElB1vIWjTEiN7xAcIs0zqfRIvHYjUifLhIowixRJEDjHpWpqBBl1jfVX4banhWH2ZJUNXXUAS_QcZGqNukrjsp2L8hRcVTeqRqRjvij2CZvmvrwJewwJigAmqB9gUTFUH--9h03GCVUaD06gMuLde_4m0Hh-qV24-XQ627NCw4g3Bz90086D1Q-VnT6I5JFXKpmDyaSm60HGj1spc2sZ_075Yxl4yV2GPAIvq0_lEM9AdXI9MfbVC2i8iq9h4ASbhV5NCupEjNlrPtj6Li6YxMgqG_imYq27zza7Gx52LFnUV2Q",
              tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: false
                  }
                },
                background: models.BackgroundType.Transparent,
              }
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "Embed-container" }

	getEmbeddedComponent = { (embeddedReport) => {
    console.log('Embedded report received:', embeddedReport);
    window.report = embeddedReport; 
  }
}

        
	/>

        </header>
    </div>
  )
}

export default App
