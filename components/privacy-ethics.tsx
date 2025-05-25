import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Eye, Users, CheckCircle, FileText, Scale, Heart } from "lucide-react"

export function PrivacyEthics() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Privacy & Ethics</h1>
      </div>

      {/* Ethics Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Privacy Score</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">98%</div>
            <p className="text-xs text-muted-foreground">Excellent privacy protection</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bias Detection</CardTitle>
            <Eye className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">Active</div>
            <p className="text-xs text-muted-foreground">Continuous monitoring</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consent Rate</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">User consent obtained</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">100%</div>
            <p className="text-xs text-muted-foreground">All regulations met</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="bias">Bias Detection</TabsTrigger>
          <TabsTrigger value="transparency">Transparency</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Data Privacy Framework</span>
              </CardTitle>
              <CardDescription>Comprehensive privacy protection for all user data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Data Minimization</h3>
                      <p className="text-sm text-muted-foreground">Only collect necessary data for analysis</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Purpose Limitation</h3>
                      <p className="text-sm text-muted-foreground">
                        Data used only for stated sentiment analysis purposes
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Storage Limitation</h3>
                      <p className="text-sm text-muted-foreground">Automatic deletion after retention period</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">90 Days</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Anonymization</h3>
                      <p className="text-sm text-muted-foreground">PII removed before processing</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Automatic</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">User Rights Management</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Right to Access</h4>
                    <p className="text-xs text-muted-foreground">Users can request their data</p>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Right to Rectification</h4>
                    <p className="text-xs text-muted-foreground">Users can correct their data</p>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Right to Erasure</h4>
                    <p className="text-xs text-muted-foreground">Users can delete their data</p>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Right to Portability</h4>
                    <p className="text-xs text-muted-foreground">Users can export their data</p>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consent Management</CardTitle>
              <CardDescription>Transparent consent collection and management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <p className="text-sm text-muted-foreground">Consent Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">847</div>
                  <p className="text-sm text-muted-foreground">Active Consents</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <p className="text-sm text-muted-foreground">Withdrawals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bias" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Bias Detection & Mitigation</span>
              </CardTitle>
              <CardDescription>Continuous monitoring and correction of algorithmic bias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Gender Bias Detection</h3>
                    <p className="text-sm text-muted-foreground">Monitor for gender-based sentiment differences</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Low Risk</div>
                    <div className="text-xs text-muted-foreground">2.1% variance</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Age Bias Detection</h3>
                    <p className="text-sm text-muted-foreground">Monitor for age-related sentiment patterns</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Low Risk</div>
                    <div className="text-xs text-muted-foreground">1.8% variance</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Cultural Bias Detection</h3>
                    <p className="text-sm text-muted-foreground">Monitor for cultural and linguistic bias</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-600">Medium Risk</div>
                    <div className="text-xs text-muted-foreground">4.2% variance</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Socioeconomic Bias</h3>
                    <p className="text-sm text-muted-foreground">Monitor for socioeconomic sentiment bias</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Low Risk</div>
                    <div className="text-xs text-muted-foreground">1.5% variance</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Bias Mitigation Strategies</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Diverse training data sets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Regular model auditing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Fairness-aware algorithms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Continuous bias monitoring</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fairness Metrics</CardTitle>
              <CardDescription>Quantitative measures of algorithmic fairness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Demographic Parity</span>
                    <span className="text-sm font-medium">97.2%</span>
                  </div>
                  <Progress value={97.2} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Equal Opportunity</span>
                    <span className="text-sm font-medium">95.8%</span>
                  </div>
                  <Progress value={95.8} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Calibration</span>
                    <span className="text-sm font-medium">98.1%</span>
                  </div>
                  <Progress value={98.1} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Individual Fairness</span>
                    <span className="text-sm font-medium">96.5%</span>
                  </div>
                  <Progress value={96.5} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transparency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Explainability & Transparency</span>
              </CardTitle>
              <CardDescription>Clear explanations of how sentiment analysis decisions are made</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Model Interpretability</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our sentiment analysis provides detailed explanations for each prediction, including:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Key words and phrases that influenced the sentiment score</li>
                    <li>• Confidence levels for each emotion detected</li>
                    <li>• Contributing factors from different modalities (text, audio, visual)</li>
                    <li>• Uncertainty quantification and alternative interpretations</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Decision Transparency</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Every analysis includes a detailed breakdown showing:
                  </p>
                  <div className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
                    <div>• Model version used</div>
                    <div>• Processing timestamp</div>
                    <div>• Input preprocessing steps</div>
                    <div>• Feature extraction methods</div>
                    <div>• Confidence thresholds applied</div>
                    <div>• Quality assurance checks</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Algorithmic Accountability</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain detailed logs of all algorithmic decisions and provide audit trails for compliance and
                    review purposes.
                  </p>
                </div>
              </div>

              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Download Transparency Report
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Human Oversight</CardTitle>
              <CardDescription>Human-in-the-loop processes for quality assurance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Expert Review Process</h3>
                  <p className="text-sm text-muted-foreground">Human experts review edge cases and ambiguous results</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">Regular human validation of automated decisions</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Daily</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Appeal Process</h3>
                  <p className="text-sm text-muted-foreground">Users can request human review of automated decisions</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Available</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Regulatory Compliance</span>
              </CardTitle>
              <CardDescription>Adherence to global privacy and AI regulations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-medium">Privacy Regulations</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">GDPR (EU)</span>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CCPA (California)</span>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">PIPEDA (Canada)</span>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">LGPD (Brazil)</span>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">AI & Ethics Frameworks</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">EU AI Act</span>
                      <Badge className="bg-green-100 text-green-800">Ready</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">IEEE Standards</span>
                      <Badge className="bg-green-100 text-green-800">Aligned</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ISO/IEC 23053</span>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">NIST AI Framework</span>
                      <Badge className="bg-green-100 text-green-800">Aligned</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Industry Standards</h3>
                <div className="grid gap-2 md:grid-cols-3">
                  <Badge className="bg-blue-100 text-blue-800 justify-center py-2">SOC 2 Type II</Badge>
                  <Badge className="bg-blue-100 text-blue-800 justify-center py-2">ISO 27001</Badge>
                  <Badge className="bg-blue-100 text-blue-800 justify-center py-2">HIPAA Ready</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Ethical AI Principles</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Human-centered design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Privacy by design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Fairness and non-discrimination</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Transparency and explainability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Accountability and governance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Monitoring</CardTitle>
              <CardDescription>Continuous monitoring and reporting of compliance status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <p className="text-sm text-muted-foreground">Compliance Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <p className="text-sm text-muted-foreground">Open Issues</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <p className="text-sm text-muted-foreground">Monitoring</p>
                </div>
              </div>

              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Generate Compliance Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
