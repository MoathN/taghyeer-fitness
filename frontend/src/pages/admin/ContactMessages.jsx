import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FaSync, FaEnvelope } from "react-icons/fa";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/contact");
      setMessages(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError("Failed to load messages. Please try again.");
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const getSubjectBadge = (subject) => {
    const colors = {
      membership: "bg-blue-100 text-blue-800",
      training: "bg-green-100 text-green-800",
      nutrition: "bg-purple-100 text-purple-800",
      support: "bg-yellow-100 text-yellow-800",
      other: "bg-gray-100 text-gray-800",
    };

    return (
      <Badge variant="outline" className={colors[subject?.toLowerCase()] || colors.other}>
        {subject || "Other"}
      </Badge>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return `${formatDistanceToNow(date, { addSuffix: true })}`;
  };

  return (
    <div className="container py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Contact Messages</CardTitle>
            <CardDescription>
              View and manage all contact form submissions
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchMessages}
            disabled={loading}
            className="flex items-center gap-1"
          >
            <FaSync className={loading ? "animate-spin" : ""} />
            <span>Refresh</span>
          </Button>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="flex justify-center p-6 text-red-500">{error}</div>
          ) : loading ? (
            <div className="flex justify-center p-6">Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <FaEnvelope className="mb-4 h-12 w-12 text-gray-300" />
              <h3 className="text-lg font-medium">No messages yet</h3>
              <p className="text-sm text-muted-foreground">
                When customers submit contact forms, they will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">{message.name}</TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.phone || "N/A"}</TableCell>
                      <TableCell>{getSubjectBadge(message.subject)}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {message.message}
                      </TableCell>
                      <TableCell>{formatDate(message.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMessages; 